# `responseToImageDataUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/http-image.ts` · [README do módulo](../../../../../modules/shared/node/http-image-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404465-404472](../../../../../../reference/runtime/host-main.cjs#L404465-L404472) | `FunctionDeclaration` | sim | `response, maxBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404465-404472](../../../../../../reference/runtime/host-main.cjs#L404465-L404472) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:404465

Chamadas escritas diretamente neste corpo: `bytes.toString`, `imageContentType`, `readCappedImageBytes`.

SHA-256 do trecho: `64f8787e84372182ee760854b2e3d4b4287278b8bd490414e03eb46019321c6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
