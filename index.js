/* 
 * Copyright (c) 2023 Emanuele Aliberti, MTKA
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */
'use strict'

const md = require('node-mdaemon-api');

function spoolMessage(mailFrom, mailTo, mailSubject, mailBody) {
    const messageInfo = md.MD_InitMessageInfo();
    if (!messageInfo) {
        printError(`could NOT create a MD_MessageInfo object`);
        return false;
    }
    messageInfo.ContentType = 'text/plain';
    messageInfo.From = mailFrom;
    messageInfo.To = mailTo;
    messageInfo.Subject = mailSubject;
    messageInfo.MessageBody = mailBody;
    return md.MD_SpoolMessage(messageInfo);
}

const fromLocalPart = 'postmaster';

const autoResponderAddress = 'XXXX';

const domainNames = md.MD_GetDomainNames() ?? [];

domainNames.forEach(domainName => {
    const mailFrom = `${fromLocalPart}@${domainName}`;
    const mailTo = autoResponderAddress;
    const mailSubject = `TEST from ${domainName}`;
    const mailBody = `This is just a test message from ${domainName}. Please ignore it.`;
    if (spoolMessage(mailFrom, mailTo, mailSubject, mailBody)) {
        console.log('Test message sent to', mailTo, 'for domain', domainName);
    } else {
        console.error(`Could NOT send a test message to`, mailTo, 'for domain', domainName);
    }
});