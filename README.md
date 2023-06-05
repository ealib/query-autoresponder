# Query an Autoresponder

Send a message to an autoresponder address from any domain managed by MDaemon.

## How to use

1. Clone or download the source files
2. Set the proper **autoresponder address** to write to in `index.js`
   ```js
   const autoResponderAddress = 'XXXX';
   ```
   for instance
   ```js
   const autoResponderAddress = 'test@example.com';
   ```
3. yarn install
4. yarn start

## Legal disclaimer

MDaemon® is a trademark of [MDaemon Technologies, Ltd.](https://mdaemon.com/pages/about-us)
MDaemon Technologies makes no representations, endorsements, or
warranties regarding Third Party Products or Services.

Node.js is a trademark of [OpenJS Foundation](https://openjsf.org/).

Windows&trade; is a [trademark of Microsoft Corp.](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)

## License

Copyright (c) 2023 Emanuele Aliberti, MTKA

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
