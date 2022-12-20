import { Request, Response } from 'express';

import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Client from 'src/models/client';

export const getAllClient = async (req: Request, res: Response) => {
  const allClients = await Client.find({ ...req.query, logicDelete: false });

  return res.status(200).json({
    message: 'Showing Clients.',
    data: allClients,
    error: false,
  });
};

export const getClientById = async (req: Request, res: Response) => {
  const client = await Client.findOne({ _id: req.params.id, logicDelete: false });
  if (!client) {
    throw new CustomError(404, `Could not find a client by the id of ${req.params.id}.`);
  }
  return res.status(200).json({
    message: `Showing the specified client by the id of ${req.params.id}.`,
    data: client,
    error: false,
  });
};

export const updateClient = async (req: Request, res: Response) => {
  const clientToUpdate = await Client.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false },
    req.body,
    { new: true },
  );
  if (!clientToUpdate) {
    throw new CustomError(404, `Could not find a client by the id of ${req.params.id}.`);
  }
  return res.status(200).json({
    message: 'Client updated successfully.',
    data: clientToUpdate,
    error: false,
  });
};

export const activeClient = async (req: Request, res: Response) => {
  const clientToChange = await Client.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: false },
    { isActive: true },
    { new: true },
  );
  if (!clientToChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist or is already active.`);
  }
  return res.status(200).json({
    message: 'Client updated successfully.',
    data: clientToChange,
    error: false,
  });
};

export const inactiveClient = async (req: Request, res: Response) => {
  const clientToChange = await Client.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: true },
    { isActive: false },
    { new: true },
  );
  if (!clientToChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist or is already inactive.`);
  }
  return res.status(200).json({
    message: 'Client updated successfully.',
    data: clientToChange,
    error: false,
  });
};

export const deleteClient = async (req: Request, res: Response) => {
  const clientToChange = await Client.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false },
    { logicDelete: true },
    { new: true },
  );
  if (!clientToChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist.`);
  }
  return res.status(200).json({
    message: 'Client deleted successfully.',
    data: clientToChange,
    error: false,
  });
};

export const approveClient = async (req: Request, res: Response) => {
  const clientToChange = await Client.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, approved: false },
    { approved: true },
    { new: true },
  );
  if (!clientToChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist or is already approved.`);
  }
  return res.status(200).json({
    message: 'Client approved successfully.',
    data: clientToChange,
    error: false,
  });
};
