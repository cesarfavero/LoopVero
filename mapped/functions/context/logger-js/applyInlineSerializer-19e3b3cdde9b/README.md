# `applyInlineSerializer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225479-225489](../../../../../reference/runtime/host-main.cjs#L225479-L225489) | `FunctionDeclaration` | não | `value, options2, path33, depth` |
| [evaluation:1967-1977](../../../../../reference/runtime/sand-eval-runner.cjs#L1967-L1977) | `FunctionDeclaration` | não | `value, options2, path33, depth` |
| [state-worker:21356-21366](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21356-L21366) | `FunctionDeclaration` | não | `value, options, path, depth` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225479-225489](../../../../../reference/runtime/host-main.cjs#L225479-L225489) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:1967-1977](../../../../../reference/runtime/sand-eval-runner.cjs#L1967-L1977) | 2 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:21356-21366](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21356-L21366) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:225479

Chamadas escritas diretamente neste corpo: `options2.inlineSerializer`.

SHA-256 do trecho: `6a52b1657b3bbc48c60e5c631b50f59aa2bdf088c764674aa630ab1867f4d63b`.

### evaluation:1967

Chamadas escritas diretamente neste corpo: `options2.inlineSerializer`.

SHA-256 do trecho: `6a52b1657b3bbc48c60e5c631b50f59aa2bdf088c764674aa630ab1867f4d63b`.

### state-worker:21356

Chamadas escritas diretamente neste corpo: `options.inlineSerializer`.

SHA-256 do trecho: `222a0d368d97181b9b94a2a133aad34fb6d0c49cf8b6c776b8e129859c54ecf3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
