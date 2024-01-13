import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const BlogCard = ({im,x,name}) => {
  return (
    <Card className={`max-w-[24rem] overflow-hidden rounded-3xl ${x==true ? 'max-h-[28rem]' : ''}`}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={im}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="px-4 py-2">
        <Typography variant="h4" color="blue-gray">
          {name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
