# `computeRestoredTokenStaleness`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-stale-tokens.js` · [README do módulo](../../../../modules/agent-engine/summarization-stale-tokens-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:650327-650336](../../../../../reference/runtime/host-main.cjs#L650327-L650336) | `FunctionDeclaration` | não | `args` |
| [evaluation:441980-441989](../../../../../reference/runtime/sand-eval-runner.cjs#L441980-L441989) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:650327-650336](../../../../../reference/runtime/host-main.cjs#L650327-L650336) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:441980-441989](../../../../../reference/runtime/sand-eval-runner.cjs#L441980-L441989) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:650327

Chamadas escritas diretamente neste corpo: `.some`, `args.messages.slice`.

SHA-256 do trecho: `65d5f073994e7dc53ef8f96091735b8bc140d4c98fd38ab55e52bb3e9d170d6d`.

### evaluation:441980

Chamadas escritas diretamente neste corpo: `.some`, `args.messages.slice`.

SHA-256 do trecho: `65d5f073994e7dc53ef8f96091735b8bc140d4c98fd38ab55e52bb3e9d170d6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
