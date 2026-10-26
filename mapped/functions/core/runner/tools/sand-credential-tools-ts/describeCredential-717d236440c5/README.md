# `describeCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751809-751816](../../../../../../../reference/runtime/host-main.cjs#L751809-L751816) | `FunctionDeclaration` | não | `view, vaultOnly` |
| [evaluation:524875-524882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524875-L524882) | `FunctionDeclaration` | não | `view, vaultOnly` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751809-751816](../../../../../../../reference/runtime/host-main.cjs#L751809-L751816) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524875-524882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524875-L524882) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:751809

Chamadas escritas diretamente neste corpo: `.join`, `new Set`, `oneTimeCodeMark`, `siteHosts.slice`, `view.sites.map`.

SHA-256 do trecho: `b882eb0a03e45f04a640443d9c36e16f03ad2dabfd29992af233a271f7d9fc40`.

### evaluation:524875

Chamadas escritas diretamente neste corpo: `.join`, `new Set`, `oneTimeCodeMark`, `siteHosts.slice`, `view.sites.map`.

SHA-256 do trecho: `b882eb0a03e45f04a640443d9c36e16f03ad2dabfd29992af233a271f7d9fc40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
