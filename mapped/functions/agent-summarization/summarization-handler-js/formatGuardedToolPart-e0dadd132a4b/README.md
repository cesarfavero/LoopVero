# `formatGuardedToolPart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620784-620791](../../../../../reference/runtime/host-main.cjs#L620784-L620791) | `FunctionDeclaration` | não | `prefix, serializedValue` |
| [evaluation:305138-305145](../../../../../reference/runtime/sand-eval-runner.cjs#L305138-L305145) | `FunctionDeclaration` | não | `prefix, serializedValue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620784-620791](../../../../../reference/runtime/host-main.cjs#L620784-L620791) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305138-305145](../../../../../reference/runtime/sand-eval-runner.cjs#L305138-L305145) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620784

Chamadas escritas diretamente neste corpo: `serializedValue.slice`.

SHA-256 do trecho: `4e2ad0cab78197a2fa81e38c97fa4a813d79ed05f0ad324084bc6fe2bfc349d0`.

### evaluation:305138

Chamadas escritas diretamente neste corpo: `serializedValue.slice`.

SHA-256 do trecho: `4e2ad0cab78197a2fa81e38c97fa4a813d79ed05f0ad324084bc6fe2bfc349d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
