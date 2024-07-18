
/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                    ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//                       █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
                         █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
                         █░░║║║╠─║─║─║║║║║╠─░░█
                         █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
                         █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
                                                                                           //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Nzi-Md
   * @author : Nzi
   * @youtube : https://www.youtube.com/c/@Sachoni
   * @infoription : Nzi-Md ,A unique whatsapp bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Nzi
   * © 2024 Nzi-Md ✭ ⛥.
   * plugin date : 10/6/2024
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/







const {
    smd,
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
    smdJson,
    smdBuffer
     } = require('../lib')



smd({
    cmdname: "cat",
    desc: "Send Images of randome Cats!",
    type: "misc",
    filename: __filename,
  },
  async(m)=>{
  try{
    await m.send('https://cataas.com/cat',{caption:"*meyaoooooooooooooon!*"},"img",m)
  }catch(e){ m.error(`${e}\n\nCommand: cat`,e,false)}
  })
  
  
