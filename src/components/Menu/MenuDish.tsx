import { Dish } from "@/models";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components";

function MenuDish({ dish }: { dish: Dish }) {
  const { category, name, price, description, image, imageDialog } = dish;
  const isCombo = category === "combos" && imageDialog;

  return (
    <Dialog key={name}>
      <DialogTrigger className="focusVisible rounded-lg">
        <div className="rounded-lg shadow-md flex flex-col gap-4">
          <img
            src={image}
            loading="lazy"
            alt={name}
            className="rounded-t-lg w-[300px] aspect-square object-cover object-center"
          />
          <div className="mb-4">
            <p className="font-flame">{name}</p>
            <p>${price}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        {isCombo ? (
          <div className="p-4">
            <img src={imageDialog} alt={name} loading="lazy" className="rounded-md h-auto]" />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-start">{name}</DialogTitle>
            </DialogHeader>
            <img src={image} alt={name} loading="lazy" className="rounded-md mb-4" />
            <div className="space-y-4">
              <p>{description}</p>
              <div className="text-end relative">
                <p className="text-2xl">
                  ${price}.<sup className="text-sm -top-2">00</sup>
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default MenuDish;
