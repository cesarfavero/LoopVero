# `isUnder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/virtual-mount.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/virtual-mount-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765819-765823](../../../../../../reference/runtime/host-main.cjs#L765819-L765823) | `FunctionDeclaration` | não | `path33, prefix` |
| [evaluation:559184-559188](../../../../../../reference/runtime/sand-eval-runner.cjs#L559184-L559188) | `FunctionDeclaration` | não | `path33, prefix` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765819-765823](../../../../../../reference/runtime/host-main.cjs#L765819-L765823) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559184-559188](../../../../../../reference/runtime/sand-eval-runner.cjs#L559184-L559188) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:765819

Chamadas escritas diretamente neste corpo: `path33.startsWith`, `prefix.replace`.

SHA-256 do trecho: `521bd446d97ba345ea7daa95d450d39d5139b4f703cd7ed68c549bce3b029cc4`.

### evaluation:559184

Chamadas escritas diretamente neste corpo: `path33.startsWith`, `prefix.replace`.

SHA-256 do trecho: `521bd446d97ba345ea7daa95d450d39d5139b4f703cd7ed68c549bce3b029cc4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
