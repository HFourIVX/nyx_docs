# Media Commands

Media-processing commands for creating meme captions, converting images/videos into compressed GIFs, running OCR on images, and transcribing voice messages or audio/video files. All four commands work in **both servers and DMs** (`visibility: all`).

| Command | Mode | Aliases | Cooldown | Max Input / Limits |
| --- | --- | --- | --- | --- |
| `caption` | Prefix | `cap` | 5s server | 100 MB input · 60s video clip · `<20 MB` output |
| `gif` | Prefix | `togif`, `makegif` | 5s server | 30 MB input · 60s clip · `<20 MB` (`<10 MB` for `banner`) |
| `ocr` | Prefix | `readtext`, `imagetotext`, `itt` | 8s user | 20 MB image · English Tesseract OCR |
| `transcribe` | Prefix | `stt`, `speechtotext`, `voicetotext`, `vtt` | 12s user | 30 MB media · 5 min (300s) clip · local Whisper |

---

## `caption`

Adds a white meme-style top caption banner above an image, animated GIF, or video.

- **Usage:** `;caption <caption text>` (with attachment, embed, or reply) or `;caption <link> <caption text>`
- **Aliases:** `cap`
- **Cooldown:** 5s server
- **Details:**
  - Queued in the media queue (up to 2 concurrent jobs, 10 queued).
  - Resolves Discord user, role, and channel mentions into readable names, normalizes stylized Unicode text for Impact font compatibility, and renders custom Discord emojis and Twemoji inline.
  - Outputs PNG for still images and compressed GIF (clipped to 60 seconds and kept under 20 MB via adaptive FFmpeg quality profiles) for videos and animated GIFs.
- **Examples:** `;caption me when the code works` · `;caption https://example.com/video.mp4 funny video`

## `gif`

Converts an attached, replied-to, or linked image or video into an optimized GIF using FFmpeg `palettegen`/`paletteuse`.

- **Usage:** `;gif [banner] [link]` (or attach/reply to media)
- **Aliases:** `togif`, `makegif`
- **Cooldown:** 5s server
- **Details:**
  - Supports still images (`svg`, `avif`, `tiff`, `png`, `jpg`, `webp`) and videos (up to 30 MB input, clipped to 60 seconds).
  - Outputs under 20 MB by default, or targets under **10 MB** (`banner.gif`) when `banner` is passed for Discord profile banners.
- **Examples:** `;gif` · `;gif banner` · `;gif https://example.com/video.mp4` · `;gif banner https://example.com/video.mp4`

## `ocr`

Extracts printed text from an image using `tesseract.js` Optical Character Recognition.

- **Usage:** `;ocr [image attachment | image link | reply to image]`
- **Aliases:** `readtext`, `imagetotext`, `itt`
- **Cooldown:** 8s user
- **Details:**
  - Accepts public HTTP/HTTPS image URLs (private/local network URLs are blocked), attachments, replied images/stickers, embed images, or custom Discord emojis up to 20 MB.
  - Preprocesses images with `sharp` and returns extracted text plus rounded OCR confidence. Outputs exceeding 3,500 characters show a 1,500-character preview with an attached `ocr_output.txt` file.
- **Examples:** `;ocr https://example.com/image.png` · `;ocr` (replying to or attaching an image)

## `transcribe`

Transcribes spoken audio from Discord voice messages, audio attachments, video files, or direct media URLs into text.

- **Usage:** `;transcribe [audio/video attachment | direct link | reply to voice/audio/video]`
- **Aliases:** `stt`, `speechtotext`, `voicetotext`, `vtt`
- **Cooldown:** 12s user
- **Details:**
  - Supports voice messages, `.mp3`, `.ogg`, `.opus`, `.wav`, `.m4a`, `.aac`, `.flac`, `.mp4`, `.mov`, `.webm`, `.mkv`, `.avi`, and more up to 30 MB (blocking private/local URLs).
  - Clips audio at 5 minutes (300s), resamples to 16kHz mono via FFmpeg, and runs `Xenova/whisper-base` locally through a serialized transcription queue. Transcripts longer than 3,500 characters attach `transcription.txt`.
- **Examples:** `;transcribe https://example.com/audio.mp3` · `;transcribe` (replying to a voice message or video)
