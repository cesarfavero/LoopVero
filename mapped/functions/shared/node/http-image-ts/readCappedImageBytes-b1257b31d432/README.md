# `readCappedImageBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/http-image.ts` · [README do módulo](../../../../../modules/shared/node/http-image-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404445-404464](../../../../../../reference/runtime/host-main.cjs#L404445-L404464) | `FunctionDeclaration` | sim | `response, maxBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404445-404464](../../../../../../reference/runtime/host-main.cjs#L404445-L404464) | 5 | 1 | 2 | 4 | 0 | 0 |

### host:404445

Chamadas escritas diretamente neste corpo: `Buffer.concat`, `Number`, `Number.isFinite`, `body.getReader`, `chunks.push`, `reader.cancel`, `reader.read`, `response.headers.get`.

Alvos de atribuição ou incremento: `total`.

SHA-256 do trecho: `0c4b49c72dac0c33ede00c2997687d5d7a648768a6d82cd9e47a4010aad09217`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
