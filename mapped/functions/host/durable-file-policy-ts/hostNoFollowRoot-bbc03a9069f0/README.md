# `hostNoFollowRoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/durable-file-policy.ts` · [README do módulo](../../../../modules/host/durable-file-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453699-453701](../../../../../reference/runtime/host-main.cjs#L453699-L453701) | `FunctionDeclaration` | não | `nonLinuxRoot` |
| [evaluation:627473-627475](../../../../../reference/runtime/sand-eval-runner.cjs#L627473-L627475) | `FunctionDeclaration` | não | `nonLinuxRoot` |
| [state-worker:447-449](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L447-L449) | `FunctionDeclaration` | não | `nonLinuxRoot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453699-453701](../../../../../reference/runtime/host-main.cjs#L453699-L453701) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627473-627475](../../../../../reference/runtime/sand-eval-runner.cjs#L627473-L627475) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:447-449](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L447-L449) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453699

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

### evaluation:627473

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

### state-worker:447

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `de9a26d51a382a75a7bc3e17f036befd481d05d3a6b37b58071fbca7ae081d4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
