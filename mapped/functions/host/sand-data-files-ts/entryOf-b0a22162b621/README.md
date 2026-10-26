# `entryOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627629-627631](../../../../../reference/runtime/sand-eval-runner.cjs#L627629-L627631) | `FunctionDeclaration` | não | `fd, logicalPath, name18` |
| [state-worker:630-632](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L630-L632) | `FunctionDeclaration` | não | `fd, logicalPath, name` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627629-627631](../../../../../reference/runtime/sand-eval-runner.cjs#L627629-L627631) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:630-632](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L630-L632) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:627629

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `e2707b1386eabb19d53e1d23ad62e1a0fc87008d7eb906e69ee4536c4b6ec536`.

### state-worker:630

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `23f9dc63aa2ae39c3f6ad6fcdb50e287ecf2ca54c38fd19e83957b47e2961cbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
