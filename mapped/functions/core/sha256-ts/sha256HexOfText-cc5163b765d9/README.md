# `sha256HexOfText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/sha256.ts` · [README do módulo](../../../../modules/core/sha256-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474083-474085](../../../../../reference/runtime/host-main.cjs#L474083-L474085) | `FunctionDeclaration` | não | `text3` |
| [evaluation:536065-536067](../../../../../reference/runtime/sand-eval-runner.cjs#L536065-L536067) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474083-474085](../../../../../reference/runtime/host-main.cjs#L474083-L474085) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536065-536067](../../../../../reference/runtime/sand-eval-runner.cjs#L536065-L536067) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474083

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `78ac61dd4fccbe5f87136d234eb617a4aad8b20081651d235075bf20984dfe63`.

### evaluation:536065

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `5240e2c011636dba8c5ceef664a9757e40d97133646e784041636c4d5b58ccbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
