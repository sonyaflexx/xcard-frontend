'use client'

import MenuList from "./_components/MenuList"
import MenuItem from "./_components/MenuItem"
import ItemInfo from "./_components/ItemInfo"
import ItemAction from "./_components/ItemAction"
import ThemeSwitcher from "./_components/ThemeSwitcher"
import { logout } from "@/api/auth"

export default function Menu() {
    return (
        <div className="w-full flex flex-col items-center gap-6 py-10 max-md:px-4 max-md:mb-8">
            <MenuList>
                <MenuItem onClick={logout}>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"></path></svg>
                        <span>Lock Now</span>
                    </ItemInfo>
                    <ItemAction>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z" clipRule="evenodd"></path></svg>
                    </ItemAction>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>
                        <span>Scan QR Code</span>
                    </ItemInfo>
                    <ItemAction>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z" clipRule="evenodd"></path></svg>
                    </ItemAction>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg>
                        <span>Connected Sites</span>
                    </ItemInfo>
                    <ItemAction>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z" clipRule="evenodd"></path></svg>
                    </ItemAction>
                </MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg>
                        <span>Address Book</span>
                    </ItemInfo>
                    <ItemAction>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z" clipRule="evenodd"></path></svg>
                    </ItemAction>
                </MenuItem>
            </MenuList>
            <MenuList label="GENERAL">
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"></path></svg>
                        <span>Theme</span>
                    </ItemInfo>
                    <ItemAction>
                        <ThemeSwitcher />
                    </ItemAction>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A47.63 47.63 0 0 1 15 5.621m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"></path></svg>
                        <span>Language</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>
                        <span>Default Currency</span>
                    </ItemInfo>
                </MenuItem>
            </MenuList>
            <MenuList label="SECURITY">
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25z"></path></svg>
                        <span>Change Password</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path></svg>
                        <span>Protection</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <div className="flex items-center gap-3 text-red-soft">
                            <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="img"><path d="M7.977 9.348H2.984v-.001m16.985.518a8.25 8.25 0 0 0-13.804-3.7l-3.18 3.182m0-4.991v4.99M12 3.75A8.25 8.25 0 1 1 3.81 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span>Reset App</span>
                        </div>
                    </ItemInfo>
                </MenuItem>
            </MenuList>
            <MenuList label="ALERT">
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                        <span>Notification</span>
                    </ItemInfo>
                </MenuItem>
            </MenuList>
            <MenuList label="ADVANCED">
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>
                        <span>Crypto</span>
                    </ItemInfo>
                </MenuItem>
            </MenuList>
            <MenuList label="ABOUT">
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"></path></svg>
                        <span>Version</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>
                        <span>User Agreement</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
                        <span>Website</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" role="img"><path d="m5.45 19.577.25-.707-.25.707Zm-.14-.05-.24.712.24-.711Zm.415.137-.165.732.165-.732Zm.423-.06.387.641-.387-.642Zm.372-.362.577.478-.577-.478Zm.333-.42.59.464-.59-.463Zm.228-.289-.588-.465.588.465Zm-.226.287-.59-.463.59.463Zm5.218-1.268.002.75-.002-.75Zm-2.876-.315-.175.73.175-.73Zm5.73-.016-.181-.728.182.728Zm2.128 1.46-.586.469.586-.469Zm-.53-.677-.612.434.014.02.598-.454Zm1.072 1.34.574-.483-.574.484Zm.192.222-.555.505.555-.505Zm.068.071-.52.54c.02.02.04.037.062.054l.458-.594Zm.07.054.364-.656h-.002l-.362.656Zm.11.029v.75a.754.754 0 0 0 .183-.023l-.183-.727Zm.752-.226.243.71-.244-.71Zm-.462.153.183.727a.731.731 0 0 0 .041-.011l-.224-.716Zm3.743-2.024.498.561-.498-.56ZM20.12 6.017l-.678.32.678-.32Zm2.385 10.12.748-.047-.748.048ZM19.649 5.12l.601-.449-.601.449Zm-.225-.206.37-.653-.37.653Zm-.25-.093.194-.725-.194.725Zm-1.607-.252-.086.745.086-.745Zm-2.316-.205.045-.748-.045.748Zm-6.053-.013-.036-.75.036.75Zm-4.556.521-.209-.72.209.72Zm-.133.078.502.557-.502-.557Zm-.083.09-.588-.465.588.466Zm-.163.245L3.618 4.9l.645.384Zm-.384.743.68.318-.68-.318Zm-.78 1.974-.715-.23.714.23Zm-1.606 8.244-.748-.055.748.055Zm.387 1.314.52-.541-.52.54Zm6.072-.127.588.465a.75.75 0 0 0 .141-.64l-.73.175Zm14.618-.254.498.56a.75.75 0 0 0 .196-.275l-.694-.285Zm.001-.002.694.285a.75.75 0 0 0 .055-.333l-.749.048ZM1.43 17.126.68 17.07a.75.75 0 0 0 .048.324l.7-.27Zm0 .002-.7.268a.75.75 0 0 0 .181.273l.52-.541Zm6.522.301-.627-.411a.75.75 0 0 0-.102.587l.729-.176Zm9.636-.636a.75.75 0 0 0-.97-1.144l.97 1.144Zm-9.325.163.261-.703-.261.703Zm-.84-1.29a.75.75 0 1 0-.932 1.174l.932-1.175ZM5.7 18.87l-.152-.053-.477 1.422.127.044.502-1.413Zm.19.063a2.237 2.237 0 0 1-.19-.063l-.502 1.413c.087.031.23.083.362.113l.33-1.463Zm-.13.028a.242.242 0 0 1 .086-.027c.036-.005.054.001.043-.002l-.329 1.464c.281.063.627.06.975-.15L5.76 18.96Zm.182-.198a2.402 2.402 0 0 1-.143.162c-.036.036-.048.041-.039.036l.775 1.284c.244-.147.433-.369.562-.525l-1.155-.957Zm.322-.404c-.137.174-.239.304-.322.404l1.155.957c.099-.119.215-.267.346-.434l-1.18-.927Zm.23-.291-.229.29 1.18.925.225-.285-1.177-.93Zm-.229.29-.001.001 1.18.927.001-.003-1.18-.926Zm5.806-1.556a11.65 11.65 0 0 1-2.7-.294l-.35 1.459c.955.229 2.013.338 3.054.335l-.004-1.5Zm2.675-.309a11.38 11.38 0 0 1-2.675.309l.004 1.5c1.042-.003 2.094-.118 3.035-.353l-.364-1.456Zm2.895 1.72c-.192-.24-.38-.48-.52-.663l-1.194.907c.15.197.346.448.542.693l1.172-.937Zm.53.648c-.147-.174-.339-.409-.53-.648l-1.172.937c.196.245.397.49.554.678l1.148-.967Zm.173.2c-.04-.044-.1-.112-.173-.2l-1.148.967c.078.092.152.177.211.243l1.11-1.01Zm.033.036-.01-.01-.023-.025-1.11 1.01c.028.03.065.07.103.106l1.04-1.081Zm-.088-.063a.802.802 0 0 1 .056.035l.014.01.002.001-.004-.003-.014-.011-.008-.007-.007-.005a.32.32 0 0 0-.005-.004l-.008-.007-.916 1.188-.011-.009.006.005.026.022a1.584 1.584 0 0 0 .074.055c.01.007.037.025.07.044l.725-1.313Zm-.252-.064a.522.522 0 0 1 .244.06l.01.005-.728 1.312c.04.022.22.123.474.123v-1.5Zm.508-.185c-.168.058-.325.11-.443.146l.45 1.432c.132-.042.303-.098.48-.16l-.487-1.418Zm3.027-1.723c-.803.713-1.88 1.33-3.027 1.723l.487 1.419c1.314-.45 2.57-1.162 3.536-2.02l-.996-1.122Zm-2.13-10.725c1.144 2.417 2.096 6.44 2.314 9.849l1.497-.096c-.228-3.551-1.212-7.768-2.455-10.394l-1.356.641Zm-.394-.769c.065.088.16.274.394.77l1.356-.642c-.202-.426-.37-.786-.548-1.025l-1.202.897Zm.007-.001a.106.106 0 0 1-.019-.014l.012.015 1.202-.897a1.467 1.467 0 0 0-.457-.41l-.738 1.306Zm-.074-.021.07.02c.011.004.01.005.004 0l.738-1.305c-.173-.098-.342-.143-.425-.165l-.387 1.45Zm.387-1.45c-.358-.095-1.013-.19-1.714-.272l-.173 1.49c.713.083 1.264.169 1.5.232l.387-1.45Zm-1.714-.272a45.191 45.191 0 0 0-2.358-.208l-.091 1.497c.755.046 1.576.12 2.276.201l.173-1.49Zm-2.358-.208c-1.882-.115-4.14-.109-6.134-.014L9.233 5.1c1.953-.093 4.155-.098 5.972.013l.091-1.497Zm-6.134-.014c-1.958.093-3.78.275-4.729.55l.417 1.44c.756-.218 2.41-.398 4.383-.492l-.07-1.498Zm-4.729.55c-.222.064-.369.189-.426.24l1.004 1.115a.445.445 0 0 1-.16.085l-.418-1.44Zm-.426.24c-.072.065-.129.132-.17.183l1.176.932.008-.01-.01.01-1.004-1.115Zm-.17.183a3.001 3.001 0 0 0-.22.326l1.29.767a1.58 1.58 0 0 1 .106-.161l-1.175-.932Zm-.22.326a9.64 9.64 0 0 0-.418.81l1.36.635c.131-.282.252-.516.348-.678L3.617 4.9Zm-.418.81c-.285.61-.596 1.38-.815 2.061l1.428.46c.197-.614.484-1.324.746-1.886L3.2 5.711Zm-.815 2.061c-.95 2.954-1.416 5.349-1.64 8.42l1.497.108c.214-2.95.658-5.228 1.571-8.069l-1.428-.459ZM1.361 18.101c.909.872 2.33 1.674 3.71 2.138l.477-1.422c-1.22-.41-2.433-1.111-3.149-1.798L1.361 18.1Zm6.003-1.133-.87 1.1 1.176.93.87-1.1-1.176-.93Zm14.709-.35-.5.444.995 1.122.5-.444-.995-1.122Zm-.317-.432.067 1.039 1.497-.096-.067-1.04-1.497.097ZM.745 16.19l-.064.88 1.496.11.064-.881-1.496-.109ZM.91 17.67l.45.432L2.4 17.02l-.451-.433L.91 17.67Zm-.181-.274v.001l1.4-.537v-.002l-1.4.538Zm22.535.069.001-.002-1.387-.57-.001.002 1.387.57Zm-14.583-.206v-.004l-1.46.35.002.004 1.458-.35Zm7.935-1.61c-.267.227-.637.433-1.1.608l.53 1.404c.569-.215 1.105-.497 1.54-.867l-.97-1.144Zm-1.1.608c-.238.09-.497.169-.77.237l.364 1.456c.322-.081.636-.177.935-.29l-.528-1.403Zm1.62 1.313-.744-1.046-1.222.87.743 1.045 1.223-.869Zm-7.764-1.061a7.376 7.376 0 0 1-.849-.255L8 17.659c.327.121.67.223 1.022.308l.35-1.46Zm-.849-.255c-.452-.168-.823-.367-1.1-.588L6.49 16.84c.435.345.956.613 1.51.819l.523-1.406Zm.055 1.588.31-.474-1.253-.823-.311.474 1.254.823Zm9.642 2.606.29-.073-.367-1.454-.289.073.366 1.454ZM9.25 11c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 11h-1.5ZM8 12.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 13.75v-1.5ZM6.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 11h1.5ZM8 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 8.25v1.5ZM17.25 11c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 11h-1.5ZM16 12.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 13.75v-1.5ZM14.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 13.25 11h1.5ZM16 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 8.25v1.5Z"></path></svg>
                        <span>Discord</span>
                    </ItemInfo>
                </MenuItem>
                <MenuItem>
                    <ItemInfo>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24" role="img"><path d="m22 7.268-1.88-.806.985-2.149-2.29.761A3.999 3.999 0 0 0 16.13 4a4.035 4.035 0 0 0-4.027 4.028v.896c-3.168.653-5.933-1.075-8.501-4.029-.448 2.387 0 4.178 1.342 5.372L2 9.819a4.073 4.073 0 0 0 3.803 3.58l-2.46.896c.894 1.79 2.523 2.068 4.697 2.238A10.305 10.305 0 0 1 2 18.323c11.418 5.076 18.12-2.38 18.12-8.952v-.743L22 7.268Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <span>Twitter</span>
                    </ItemInfo>
                </MenuItem>
            </MenuList>
        </div>
    )
}