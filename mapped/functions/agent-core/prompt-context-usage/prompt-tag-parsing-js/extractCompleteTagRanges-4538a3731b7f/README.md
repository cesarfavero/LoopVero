# `extractCompleteTagRanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476139-476141](../../../../../../reference/runtime/host-main.cjs#L476139-L476141) | `FunctionDeclaration` | não | `promptContent, tagName2` |
| [evaluation:255449-255451](../../../../../../reference/runtime/sand-eval-runner.cjs#L255449-L255451) | `FunctionDeclaration` | não | `promptContent, tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476139-476141](../../../../../../reference/runtime/host-main.cjs#L476139-L476141) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255449-255451](../../../../../../reference/runtime/sand-eval-runner.cjs#L255449-L255451) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476139

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`.

SHA-256 do trecho: `002fb47a1f17e96bff8ecbd9f8887e972d612a8e0357269bb52916c6cc3093be`.

### evaluation:255449

Chamadas escritas diretamente neste corpo: `extractCompleteTagRangesMatching`.

SHA-256 do trecho: `735a1944647bb4f11aceae6668770ad91eec116e17ba3005256c0906c5b21d00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
