# `isPathWithin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/paths.ts` · [README do módulo](../../../../../modules/shared/node/paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430782-430786](../../../../../../reference/runtime/host-main.cjs#L430782-L430786) | `FunctionDeclaration` | não | `parent, child, opts = {}` |
| [state-worker:359-363](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L359-L363) | `FunctionDeclaration` | não | `parent, child, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430782-430786](../../../../../../reference/runtime/host-main.cjs#L430782-L430786) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:359-363](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L359-L363) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:430782

Chamadas escritas diretamente neste corpo: `rel.startsWith`.

SHA-256 do trecho: `bc1c84b155a187f6f0ac266f7d03d5c218406a382d22e6de68e064ba47a5ee8c`.

### state-worker:359

Chamadas escritas diretamente neste corpo: `rel.startsWith`.

SHA-256 do trecho: `28527867b0646816ca08240dcb0a8c4b3c2953972eac685cfb94cb0d4cd3798b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
