# `grokGmailSendCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732869-732888](../../../../../../../reference/runtime/host-main.cjs#L732869-L732888) | `FunctionDeclaration` | não | `route, draft, {   account,   recipients,   cc }` |
| [evaluation:540391-540410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540391-L540410) | `FunctionDeclaration` | não | `route, draft, {   account,   recipients,   cc }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732869-732888](../../../../../../../reference/runtime/host-main.cjs#L732869-L732888) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540391-540410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540391-L540410) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:732869

Chamadas escritas diretamente neste corpo: `signedGmailBodies`.

SHA-256 do trecho: `d340095cb7837b1feffe31a8e268a855cb8f8c4da9a69513380c5ad70fff1a64`.

### evaluation:540391

Chamadas escritas diretamente neste corpo: `signedGmailBodies`.

SHA-256 do trecho: `d340095cb7837b1feffe31a8e268a855cb8f8c4da9a69513380c5ad70fff1a64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
