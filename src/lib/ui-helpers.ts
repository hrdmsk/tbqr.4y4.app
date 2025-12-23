export function openResultTab(dataUrl: string, email: string) {
    const newWindow = window.open("", "_blank");
    if (!newWindow) {
        alert("ポップアップがブロックされました。");
        return;
    }

    const fileName = (email ? email : "thunderbird-settings") + ".png";

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <title>QRコード発行 - ${email}</title>
            <style>
                body { font-family: sans-serif; text-align: center; background: #f4f4f9; padding: 2em; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height: 80vh; }
                .card { background: white; padding: 3em; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); max-width:500px; width:100%; }
                h1 { color: #444; margin: 0 0 0.5em 0; font-size: 1.5em; }
                img { border: 1px solid #eee; padding: 10px; margin: 1.5em 0; max-width: 100%; }
                .btn { display: inline-block; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; background: #007bff; color: white; border: none; cursor: pointer; }
                .btn:hover { background: #0056b3; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>設定用QR (${email})</h1>
                <img src="${dataUrl}">
                <a href="${dataUrl}" download="${fileName}" class="btn">画像を保存 (${fileName})</a>
            </div>
        </body>
        </html>
    `;
    newWindow.document.write(htmlContent);
    newWindow.document.close();
}
