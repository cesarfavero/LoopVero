# `readGmailDefaultSendAs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735219-735236](../../../../../../../reference/runtime/host-main.cjs#L735219-L735236) | `FunctionDeclaration` | sim | `{   providerIdentifier,   gmailDefaultSendAs,   includeSignatures }` |
| [evaluation:540784-540801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540784-L540801) | `FunctionDeclaration` | sim | `{   providerIdentifier,   gmailDefaultSendAs,   includeSignatures }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735219-735236](../../../../../../../reference/runtime/host-main.cjs#L735219-L735236) | 5 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:540784-540801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540784-L540801) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:735219

Chamadas escritas diretamente neste corpo: `.catch`, `gmailDefaultSendAs`.

SHA-256 do trecho: `d3f2d055ef455875fe58d01c42b858e1d57d8415d9c5d19d87a7f4c04957a204`.

### evaluation:540784

Chamadas escritas diretamente neste corpo: `.catch`, `gmailDefaultSendAs`.

SHA-256 do trecho: `82380fa499bdc8b9280c22edd632aec9794cd3503c7e86c156be234dee8efa5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
