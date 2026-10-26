# `isValidUsedTokensThreshold`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/background-summarization.js` · [README do módulo](../../../../modules/agent-summarization/background-summarization-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616764-616766](../../../../../reference/runtime/host-main.cjs#L616764-L616766) | `FunctionDeclaration` | não | `threshold, maxTokens` |
| [evaluation:285304-285306](../../../../../reference/runtime/sand-eval-runner.cjs#L285304-L285306) | `FunctionDeclaration` | não | `threshold, maxTokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616764-616766](../../../../../reference/runtime/host-main.cjs#L616764-L616766) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285304-285306](../../../../../reference/runtime/sand-eval-runner.cjs#L285304-L285306) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616764

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.isSafeInteger`.

SHA-256 do trecho: `bcc8443cdb763495534b8a27848c46ad290e1c287b46a2b80bd8058553173586`.

### evaluation:285304

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Number.isSafeInteger`.

SHA-256 do trecho: `bcc8443cdb763495534b8a27848c46ad290e1c287b46a2b80bd8058553173586`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
