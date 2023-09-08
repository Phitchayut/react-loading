import "./styles.css";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const urlApi = "https://www.melivecode.com/api/users";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fethData = async () => {
    await axios.get(urlApi).then((res) => setData(res.data));
    setLoading(true);
  };
  useEffect(() => {
    fethData();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <Typography className="text-center py-5" variant="h2">
        Profile
      </Typography>

      <div className="flex justify-center items-center flex-wrap">
        {loading ? (
          data.map((item, id) => (
            <div key={id}>
              <Card className="mt-6 w-96 mt-5">
                <CardHeader className="relative h-56">
                  <img src={item.avatar} alt="card-image" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {item.fname} {item.lname}
                  </Typography>
                  <Typography>{item.username}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <>
            <img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" />
          </>
        )}
      </div>
    </div>
  );
}
