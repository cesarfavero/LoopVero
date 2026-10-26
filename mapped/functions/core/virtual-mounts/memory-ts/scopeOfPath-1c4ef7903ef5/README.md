# `scopeOfPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769600-769603](../../../../../../reference/runtime/host-main.cjs#L769600-L769603) | `FunctionDeclaration` | não | `path33` |
| [evaluation:565269-565272](../../../../../../reference/runtime/sand-eval-runner.cjs#L565269-L565272) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769600-769603](../../../../../../reference/runtime/host-main.cjs#L769600-L769603) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565269-565272](../../../../../../reference/runtime/sand-eval-runner.cjs#L565269-L565272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769600

Chamadas escritas diretamente neste corpo: `MEMORY_SCOPES.find`, `path33.split`.

SHA-256 do trecho: `ccb544d98041470fc7c2d6f61f0c67e3ffa41ab82b8504d4ddad9915aac55c7c`.

### evaluation:565269

Chamadas escritas diretamente neste corpo: `MEMORY_SCOPES.find`, `path33.split`.

SHA-256 do trecho: `ccb544d98041470fc7c2d6f61f0c67e3ffa41ab82b8504d4ddad9915aac55c7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
