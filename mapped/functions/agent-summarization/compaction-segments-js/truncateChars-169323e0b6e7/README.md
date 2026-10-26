# `truncateChars`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616900-616909](../../../../../reference/runtime/host-main.cjs#L616900-L616909) | `FunctionDeclaration` | não | `text3, max, marker17` |
| [evaluation:285440-285449](../../../../../reference/runtime/sand-eval-runner.cjs#L285440-L285449) | `FunctionDeclaration` | não | `text3, max, marker17` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616900-616909](../../../../../reference/runtime/host-main.cjs#L616900-L616909) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285440-285449](../../../../../reference/runtime/sand-eval-runner.cjs#L285440-L285449) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:616900

Chamadas escritas diretamente neste corpo: `text3.codePointAt`, `text3.slice`.

Alvos de atribuição ou incremento: `count2`, `i`.

SHA-256 do trecho: `e306cf0ab036fec546c37af3361a957d3eac555986c023852c0a23d26c64a3fd`.

### evaluation:285440

Chamadas escritas diretamente neste corpo: `text3.codePointAt`, `text3.slice`.

Alvos de atribuição ou incremento: `count2`, `i`.

SHA-256 do trecho: `e306cf0ab036fec546c37af3361a957d3eac555986c023852c0a23d26c64a3fd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
