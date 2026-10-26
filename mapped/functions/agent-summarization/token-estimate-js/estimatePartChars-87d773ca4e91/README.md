# `estimatePartChars`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/token-estimate.js` · [README do módulo](../../../../modules/agent-summarization/token-estimate-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620637-620656](../../../../../reference/runtime/host-main.cjs#L620637-L620656) | `FunctionDeclaration` | não | `part` |
| [evaluation:304991-305010](../../../../../reference/runtime/sand-eval-runner.cjs#L304991-L305010) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620637-620656](../../../../../reference/runtime/host-main.cjs#L620637-L620656) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:304991-305010](../../../../../reference/runtime/sand-eval-runner.cjs#L304991-L305010) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:620637

Chamadas escritas diretamente neste corpo: `safeLength`.

SHA-256 do trecho: `b04ea159875dc36582fee1be5ea6e9ed81f630116cc8f037b4063ecff04cfea8`.

### evaluation:304991

Chamadas escritas diretamente neste corpo: `safeLength`.

SHA-256 do trecho: `b04ea159875dc36582fee1be5ea6e9ed81f630116cc8f037b4063ecff04cfea8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
