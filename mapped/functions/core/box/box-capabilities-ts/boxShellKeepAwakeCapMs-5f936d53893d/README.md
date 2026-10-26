# `boxShellKeepAwakeCapMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546686-546688](../../../../../../reference/runtime/host-main.cjs#L546686-L546688) | `FunctionDeclaration` | não | `box` |
| [evaluation:475793-475795](../../../../../../reference/runtime/sand-eval-runner.cjs#L475793-L475795) | `FunctionDeclaration` | não | `box` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546686-546688](../../../../../../reference/runtime/host-main.cjs#L546686-L546688) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475793-475795](../../../../../../reference/runtime/sand-eval-runner.cjs#L475793-L475795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546686

Chamadas escritas diretamente neste corpo: `box.getShellKeepAwakeCapMs`.

SHA-256 do trecho: `a4e6065cc7fdba5f61612ae3c53068519d50dd0604fcf03c0a40ed25d32b39b3`.

### evaluation:475793

Chamadas escritas diretamente neste corpo: `box.getShellKeepAwakeCapMs`.

SHA-256 do trecho: `a4e6065cc7fdba5f61612ae3c53068519d50dd0604fcf03c0a40ed25d32b39b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
