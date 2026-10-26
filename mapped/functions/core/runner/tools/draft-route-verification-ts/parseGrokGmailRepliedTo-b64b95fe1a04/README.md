# `parseGrokGmailRepliedTo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735096-735104](../../../../../../../reference/runtime/host-main.cjs#L735096-L735104) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540670-540678](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540670-L540678) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735096-735104](../../../../../../../reference/runtime/host-main.cjs#L735096-L735104) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540670-540678](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540670-L540678) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:735096

Chamadas escritas diretamente neste corpo: `Object.entries`, `Object.fromEntries`, `grokGmailAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `c04e7668ec1baa3221ef6c9d593b61101cc20d628c19a2d5a95a0badc1cea5e0`.

### evaluation:540670

Chamadas escritas diretamente neste corpo: `Object.entries`, `Object.fromEntries`, `grokGmailAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `eb40c596e61640a492a9586d84d426aea2c43c269c841d039eec9f07521570ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
