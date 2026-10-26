# `parseSummarizerModelLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620952-620962](../../../../../reference/runtime/host-main.cjs#L620952-L620962) | `FunctionDeclaration` | não | `modelId` |
| [evaluation:305306-305316](../../../../../reference/runtime/sand-eval-runner.cjs#L305306-L305316) | `FunctionDeclaration` | não | `modelId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620952-620962](../../../../../reference/runtime/host-main.cjs#L620952-L620962) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:305306-305316](../../../../../reference/runtime/sand-eval-runner.cjs#L305306-L305316) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620952

Chamadas escritas diretamente neste corpo: `modelId.match`.

SHA-256 do trecho: `d530b2ed775bfa32482bb6a1eb2ab57652111bed97e6ba6c05332b46152a7211`.

### evaluation:305306

Chamadas escritas diretamente neste corpo: `modelId.match`.

SHA-256 do trecho: `d530b2ed775bfa32482bb6a1eb2ab57652111bed97e6ba6c05332b46152a7211`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
