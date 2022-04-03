import { FC } from "react";
import { FirebasePostType } from "../../../types";
import {
  Container,
  Photo,
  PhotoContainer,
  Overlay,
  Icon,
  IconsContainer,
} from "./Photos.styled";

const Photos: FC<{ photos: FirebasePostType[] }> = ({ photos }) => {
  return (
    <Container>
      {photos.map((photo, index) => (
        <PhotoContainer key={index}>
          <Photo src={photo.imageSrc} />
          <Overlay>
            <IconsContainer>
              <Icon>
                <img
                  style={{ filter: "invert(1)" }}
                  width={32}
                  height={32}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRYhe3WvWoUURTA8V9ShEXRdHYhPoJVarWQbQLa+FGqYKKCL6CtaJVEQ0R9BgtNF9QHMPgOmsKNaKM2GiKsRc6yp5idzG5mVpEcuAx7z8f/f/cOy3IYh/GPxiSuYB0d/MYXvMFVtAp6WriGt/gaPR28wqWYWSlO4j26JeszzqeeC7FX1rOJ2Srw3qAPuIEZTEXuNrbS0Pt4kD5/xK2onYrexdjvYrtMYjKdfAPHBtS1cA+7CbyLu4qvBo7jddS+M+A6LqeTD4LnOIvv+IYzFeqn9b+9i0UF65FcqDCsF6djVY2bwXhZlOxEcmaIgcPGbDA+FSV3InmkQYGjwfjV28gvQyeepxoUmIvndlFyxZ7diwYFNoKxWpQ8gR9RcL0B+ELM/qnkPVtMRe0a4W17997Fnf2Kl2qWaMesLparNj2Mhh3MHwB+bhR4XRIZvoKJYQdM4NGIEhn+dBT4QSRqg48ikeHP6oBnicf7SDQGryKR4c+bgJdJjA2eJdb0f6x68LVxwLPEqv5fsrGcvEjiSayxw7PEX4P/H/EH2TWV+4q5uu4AAAAASUVORK5CYII="
                />
                <p style={{ color: "white" }}>{photo.likes.length}</p>
              </Icon>
              <Icon>
                <img
                  style={{ filter: "invert(1)" }}
                  width={32}
                  height={32}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFYUlEQVR4nO2ba2xURRTHf1sqJQi0YgSNbZUSKAZQIWAFq4hK/IImfNMvSoy2MRrfb0IiijFGP/j4oFGDL9SIhliN0YCKEG00MZK2oogP0kJ9x0KVZ0vXD2euM3d7d/fe3ZnpNu4/mdzZvXMec+7M3DNnzoUyyijj/4yUJzljgDOBM1SpA44HatT9PuAg0APsBL4BuoBjnvRzghOAVuAdYB+QTlj6gDbgOrShRgXOBTYAh4nu2CDypDuAdlU61H+DWWgOAW8A53jsR2I0AR8xXPle4CXgamAOUJWDRxUwF1gJvAz8HMFvE7DQSQ8KxGTgWWS+BkoeQTpwMVBRBO8K4BLgFcUz4H8MeBqZZiOKJcBetGKHgceBWgey6oAnCRtiD9DsQFYs3E14zm4CZniQOwv40JA7ANzhQe5/SAGPEX7qN/tUQOEq5NUZ6PEUxU23WEgBLxpCe4CzXQvNgfmEp+A6HPs25pP/Fqh3KSwmTkN0CfR6xJWgGwwhu4AprgQVgKnA92j9WmwLmI92bHqBabYFWEAD8AvacTrLFuNxyBMPVtwRe+3EwBL0m2knuZ2u2FiDHlr32WDoGKvR+q4ullkDMpzSwHagsliGHlAJdCI6HwROL4bZc4rRELCoaNX8oRnROQ08UyiTWrTb2WZHL694D+2onVoIgwfRc6nJnl7esAit/5qkxCngJ0X8hV29vOJLpA+7SeghNqOtd6N9vbzhJnQ/FichfAC97y4ljy8pTkYvhvcnIfwU/eob7ehC+vJJ1M2o7WMlsEDVtzpSyie2qGsTEp0OIcoA09AuZIcjpXyiU13HITvHEKIM0GjUdyUUNgV4FegH9gPriV5DbLfLhe+M+qw4BNeiV84ksb2J6FenWX5U91y1y4d6g/aazJtRI2CCUf8ngaC70NvkN4G3VL2BcMzOdrt86DfqsQy3Cm2xJJufDxRNl/Hf1+q/9x22y4dKdH9WRd3MxCGjPp6wBXPhL3WtA2arem3GPRft8mGsUR+IQ7ASbbEkkZ+L0E6HWYaACx22y4epBu31cQguNwgW5GmbiTuBowb9UeB2D+1yYbZBf2UcgsUGwfKEwkBeNbeo0uixXTasQPcn1uHqJPQ5X+JtZAniHrQBqjNvRr0G+5E4OyTcQZUogj50I85ULDyPWOxvRkccMBsqkU6ngReiGmQ7S/tMXScAF9jXyxvOR6Y0wMdJCKuBA4jl1ltWyifWofMVTkxK/Br6lGWyXb28YBJ6+G8shMGl6NXzNnt6ecO9aP0vK4TBGGCHYvAno2sUTAR+R3TvpIgj8+VoKz5hRTU/MI/xryiW2Ra0GxoroDDCmIt2n9uxkDWyFG1Nr7k4BWA8ess8iKXslRa0Ac6zwdAhzPSdtbaYBhlZe/CQhFQEzGP8rVjyYE9CgghpJP+vVHEruvO7gVNsMW41GJfixiiFnPgEOv6B5YV6s2K8l9Ib/jWIhxd0/ldgnk0BpTz8lxIOmf8ATLctJO7qPxZYhjhKjxJx+mIRdchBiRkrfJcCNjpxkGv4VyMe1usM/xjiCBJPsJk3PBPJSDcTpQ8gi5+TzNCo4V+P5ApsJhyoDMpAxu8h4HMkiFlIXuEMJa89QtZGLI20bNZrRScXva2ERS0w+5FDijZ1bUROdFYwfNT8BnyFHLn3Ip/E9CHxxxpkVE1HnvZCZLibSCN5P2vxkLVipqNnlm4kM3sZcFwW+pnAw8jBZDY+cUs38BCO9iHZRsA+whHU7cjHT20kT5qYg8QW5iG+eSPZvbQBxJHZAWxDwlhBgoMTZDNAC/Kpyjak4z0WZVYhQz4oFcghbD/yjVCs46syyiijDBv4F8hT+pgg1aqiAAAAAElFTkSuQmCC"
                />
                <p style={{ color: "white" }}>{photo.comments.length}</p>
              </Icon>
            </IconsContainer>
          </Overlay>
        </PhotoContainer>
      ))}
    </Container>
  );
};

export default Photos;
