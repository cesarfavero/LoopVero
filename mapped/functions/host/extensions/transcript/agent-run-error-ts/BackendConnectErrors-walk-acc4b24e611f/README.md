# `_BackendConnectErrors.walk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-run-error.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736725-736745](../../../../../../../reference/runtime/host-main.cjs#L736725-L736745) | `method` | não | `error64, seen, matches` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736725-736745](../../../../../../../reference/runtime/host-main.cjs#L736725-L736745) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:736725

Chamadas escritas diretamente neste corpo: `Array.isArray`, `_BackendConnectErrors.asConnectError`, `_BackendConnectErrors.usageLimitEntry`, `_BackendConnectErrors.walk`, `connectError.findDetails`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `matches.detailed`, `matches.first`, `matches.usageLimit`.

SHA-256 do trecho: `fce89f1c3a57baaad269f191f2eecabc06fbd7f478eaac3d10a280e18d8f0adf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
