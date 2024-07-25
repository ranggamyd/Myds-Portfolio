import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="text" name="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" name="email" id="email" placeholder="E-Mail" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          name="message"
          id="message"
          placeholder="Type your message here ..."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        {"Let's"} Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
