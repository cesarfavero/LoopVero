# `formatErrorSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225551-225567](../../../../../reference/runtime/host-main.cjs#L225551-L225567) | `FunctionDeclaration` | não | `error64, options2, colors, depth, seen, path33` |
| [evaluation:2039-2055](../../../../../reference/runtime/sand-eval-runner.cjs#L2039-L2055) | `FunctionDeclaration` | não | `error63, options2, colors, depth, seen, path33` |
| [state-worker:21428-21444](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21428-L21444) | `FunctionDeclaration` | não | `error, options, colors, depth, seen, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225551-225567](../../../../../reference/runtime/host-main.cjs#L225551-L225567) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2039-2055](../../../../../reference/runtime/sand-eval-runner.cjs#L2039-L2055) | 5 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21428-21444](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21428-L21444) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:225551

Chamadas escritas diretamente neste corpo: `colors.dim`, `colors.red`, `formatInlineValue`, `path33.concat`, `seen.add`, `seen.delete`, `seen.has`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `720ac1182d54f2fb216993ff81cbaee1490a85ef182b49fad1f6b2d2043b3bd2`.

### evaluation:2039

Chamadas escritas diretamente neste corpo: `colors.dim`, `colors.red`, `formatInlineValue`, `path33.concat`, `seen.add`, `seen.delete`, `seen.has`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `fe18bcd1047406d27158b76a27d4e313cc2b1d6cf76c2f9b49b7f1d8ed92e170`.

### state-worker:21428

Chamadas escritas diretamente neste corpo: `colors.dim`, `colors.red`, `formatInlineValue`, `path.concat`, `seen.add`, `seen.delete`, `seen.has`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `4531d1a74a3161fefae6c0f66cef2750740c0bc78849fe93421d313a676814df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
