# `grokGmailSentMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735074-735092](../../../../../../../reference/runtime/host-main.cjs#L735074-L735092) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540648-540666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540648-L540666) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735074-735092](../../../../../../../reference/runtime/host-main.cjs#L735074-L735092) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540648-540666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540648-L540666) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:735074

Chamadas escritas diretamente neste corpo: `.flatMap`, `Array.isArray`, `listField`, `parseDraftConnectorJson`.

SHA-256 do trecho: `da386123c5fbb34908e7cfd318cfffb72695742ab18fea99b89b1eeffc76668e`.

### evaluation:540648

Chamadas escritas diretamente neste corpo: `.flatMap`, `Array.isArray`, `listField`, `parseDraftConnectorJson`.

SHA-256 do trecho: `b8be79ec42991cbd027bcecb861ead65ba16e37d3f4e8ee4d17e8fc1fc9e577e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
