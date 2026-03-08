"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Send } from "lucide-react";
import { useState } from "react";

export default function AdminNotifications() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (!title || !message) return;
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setTitle('');
        setMessage('');
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Thông báo</h1>
                <p className="text-slate-500 font-normal">Gửi thông báo đến người dùng</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>📣 Gửi thông báo mới</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Tiêu đề</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-lg"
                                placeholder="Nhập tiêu đề..."
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Nội dung</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-lg h-32"
                                placeholder="Nhập nội dung thông báo..."
                            />
                        </div>
                        <Button
                            onClick={handleSend}
                            className={`w-full ${sent ? 'bg-green-600' : 'bg-[#21246b] hover:bg-[#1a1d55]'}`}
                        >
                            {sent ? '✓ Đã gửi!' : <><Send className="h-4 w-4 mr-2" /> Gửi thông báo</>}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>📜 Lịch sử thông báo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { title: 'Khuyến mãi mùa hè', time: '2 giờ trước', recipients: 150 },
                                { title: 'Sản phẩm mới', time: '1 ngày trước', recipients: 200 },
                                { title: 'Chào mừng 2024', time: '1 tuần trước', recipients: 180 },
                            ].map((n, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                    <Bell className="h-5 w-5 text-[#21246b]" />
                                    <div className="flex-1">
                                        <p className="font-medium">{n.title}</p>
                                        <p className="text-sm text-slate-500 font-normal">{n.time} • {n.recipients} người nhận</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

