# `isValidAttachmentUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/streams/transport-types.ts` · [README do módulo](../../../../../modules/shared/streams/transport-types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741009-741016](../../../../../../reference/runtime/host-main.cjs#L741009-L741016) | `FunctionDeclaration` | não | `rawUrl` |
| [evaluation:480960-480967](../../../../../../reference/runtime/sand-eval-runner.cjs#L480960-L480967) | `FunctionDeclaration` | não | `rawUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741009-741016](../../../../../../reference/runtime/host-main.cjs#L741009-L741016) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:480960-480967](../../../../../../reference/runtime/sand-eval-runner.cjs#L480960-L480967) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:741009

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `301721c6db794fba51eb32fec27e6dbebffc3bc6681c0acffb8ed1b023c363f1`.

### evaluation:480960

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `301721c6db794fba51eb32fec27e6dbebffc3bc6681c0acffb8ed1b023c363f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
