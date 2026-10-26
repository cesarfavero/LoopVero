# `readUserDataDirArg`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430881-430892](../../../../../reference/runtime/host-main.cjs#L430881-L430892) | `FunctionDeclaration` | não | `argv` |
| [evaluation:530473-530484](../../../../../reference/runtime/sand-eval-runner.cjs#L530473-L530484) | `FunctionDeclaration` | não | `argv` |
| [state-worker:392-403](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L392-L403) | `FunctionDeclaration` | não | `argv` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430881-430892](../../../../../reference/runtime/host-main.cjs#L430881-L430892) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:530473-530484](../../../../../reference/runtime/sand-eval-runner.cjs#L530473-L530484) | 3 | 1 | 0 | 3 | 0 | 0 |
| [state-worker:392-403](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L392-L403) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:430881

Chamadas escritas diretamente neste corpo: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

### evaluation:530473

Chamadas escritas diretamente neste corpo: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

### state-worker:392

Chamadas escritas diretamente neste corpo: `arg.slice`, `arg.startsWith`, `next.startsWith`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `6bb33792392a37cbb65074755f3f68bf09a2b5160110c9d43d28796d3210c8cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
