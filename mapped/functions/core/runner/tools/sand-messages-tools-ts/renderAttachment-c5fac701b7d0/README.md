# `renderAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777942-777956](../../../../../../../reference/runtime/host-main.cjs#L777942-L777956) | `FunctionDeclaration` | não | `output2, inflightImages` |
| [evaluation:577677-577691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577677-L577691) | `FunctionDeclaration` | não | `output2, inflightImages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777942-777956](../../../../../../../reference/runtime/host-main.cjs#L777942-L777956) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:577677-577691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577677-L577691) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:777942

Chamadas escritas diretamente neste corpo: `createImageResult`, `createStringResult`, `decodeAttachmentEnvelope`, `inflightImages.delete`, `inflightImages.get`, `process.stderr.write`.

SHA-256 do trecho: `ee62bb6187b5a4fd099a1717d68266a92a642a509baa1e1a480a9b718b5976a3`.

### evaluation:577677

Chamadas escritas diretamente neste corpo: `createImageResult`, `createStringResult`, `decodeAttachmentEnvelope`, `inflightImages.delete`, `inflightImages.get`, `process.stderr.write`.

SHA-256 do trecho: `ee62bb6187b5a4fd099a1717d68266a92a642a509baa1e1a480a9b718b5976a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
