/*
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝
░█████╗░███╗░░░███╗██████╗░██╗
██╔══██╗████╗░████║██╔══██╗██║
███████║██╔████╔██║██║░░██║██║
██╔══██║██║╚██╔╝██║██║░░██║██║ █▀█ █▀▀█ █▀█ ▄█─ 
██║░░██║██║░╚═╝░██║██████╔╝██║ ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝ █▄▄ █▄▄█ █▄▄ ▄█▄
Copyright (C) 2021 Black Amda.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Mr-Ajeet-Bot = require('mr-ajeet-bot-public');
const Amdi = Mr-Ajeet-Bot.events
const _amdi = Mr-Ajeet-Bot.antiFunctions
const Build = Mr-Ajeet-Bot.build

Amdi.operate(
    {on: 'text', fromMe: false,  deleteCommand: false}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()  

    await _amdi.fakeBots( amdiMSG )
    
    if (Build.ANTIBAD == 'true') {
        await _amdi.antiBad( amdiMSG )
    }
    
    if (Build.ANTIBUG == 'true') {
        await _amdi.antiBug( amdiMSG )
    }

    if (Build.ANTILINK == 'true') {
        await _amdi.antiLink( amdiMSG )
    }
}));
