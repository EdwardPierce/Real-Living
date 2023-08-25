import React from "react";
import Image from "next/image";
import verifiedPhoto from "@/public/assets/verified.png";
import superhostPhoto from "@/public/assets/superhost.png";
import superhostColorPhoto from "@/public/assets/superhost-color.png";
import protectPhoto from "@/public/assets/protect.png";

const Host = ({ host }) => {
  return (
    <div className="after:block after:border-b border-gray-300">
      <div className="py-12">
        <section>
          <div>
            <div className="flex items-center">
              <div className="w-[64px] h-[64px] mr-3">
                <Image
                  src={host.host_picture_url}
                  width={64}
                  height={64}
                  alt="host"
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-[22px] font-semibold">
                  Hosted by {host.host_name}
                </h2>
              </div>
            </div>
          </div>
          {/* 1 */}

          <div className="flex mt-5">
            <div className="w-5/12">
              <div>
                <ul className="flex flex-wrap">
                  {host.host_identity_verified && (
                    <li className="mr-4">
                      <div className="flex items-center">
                        <span className="mr-2">
                          <Image
                            src={verifiedPhoto}
                            width={16}
                            height={16}
                            alt="verified"
                          />
                        </span>
                        <span className="font-light">Identity verified</span>
                      </div>
                    </li>
                  )}
                  {host.host_is_superhost && (
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2">
                          <Image
                            src={superhostPhoto}
                            width={20}
                            height={20}
                            alt="verified"
                          />
                        </span>
                        <span className="font-light">Superhost</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              {host.host_about && (
                <div className="mt-5">
                  <span className="font-light">
                    {host.host_about.length > 140
                      ? host.host_about.substring(0, 140) + "..."
                      : host.host_about}
                  </span>
                </div>
              )}

              {host.host_is_superhost && (
                <div className="mt-5">
                  <h2 className="font-medium">
                    {host.host_name} is Superhost{" "}
                  </h2>
                  <div className="font-light mt-2">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </div>
                </div>
              )}
            </div>
            {/* w-5/12 */}
            <div className="w-5/12 ml-[8.3%]">
              {host.host_response_rate && host.host_response_time && (
                <ul className="font-light">
                  <li>Response rate: {host.host_response_rate}%</li>
                  <li>Response time: {host.host_response_time}</li>
                </ul>
              )}

              <div className=" max-w-[270px] mt-6">
                <div className="flex items-center justify-between">
                  <Image
                    src={protectPhoto}
                    width={24}
                    height={24}
                    alt="protect"
                    className="mr-4"
                  />

                  <div className="text-xs">
                    To protect your payment, never transfer money or communicate
                    outside of the Real Living website or app.
                  </div>
                </div>
              </div>
            </div>
            {/* w-5/12 */}
          </div>
          {/* 2 */}
        </section>
      </div>
    </div>
  );
};

export default Host;
