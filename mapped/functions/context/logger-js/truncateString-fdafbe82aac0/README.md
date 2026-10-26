# `truncateString`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225473-225478](../../../../../reference/runtime/host-main.cjs#L225473-L225478) | `FunctionDeclaration` | não | `value, maxLength` |
| [evaluation:1961-1966](../../../../../reference/runtime/sand-eval-runner.cjs#L1961-L1966) | `FunctionDeclaration` | não | `value, maxLength` |
| [state-worker:21350-21355](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21350-L21355) | `FunctionDeclaration` | não | `value, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225473-225478](../../../../../reference/runtime/host-main.cjs#L225473-L225478) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1961-1966](../../../../../reference/runtime/sand-eval-runner.cjs#L1961-L1966) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21350-21355](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21350-L21355) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225473

Chamadas escritas diretamente neste corpo: `value.slice`.

SHA-256 do trecho: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

### evaluation:1961

Chamadas escritas diretamente neste corpo: `value.slice`.

SHA-256 do trecho: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

### state-worker:21350

Chamadas escritas diretamente neste corpo: `value.slice`.

SHA-256 do trecho: `037712657b82970b32e05b2f26f35eab902c92fcf8bca765ed6d6f22732f3e5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
