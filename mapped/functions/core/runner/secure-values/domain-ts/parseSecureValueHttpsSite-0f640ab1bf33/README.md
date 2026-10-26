# `parseSecureValueHttpsSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/domain.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758039-758055](../../../../../../../reference/runtime/host-main.cjs#L758039-L758055) | `FunctionDeclaration` | não | `raw` |
| [evaluation:546230-546246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546230-L546246) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758039-758055](../../../../../../../reference/runtime/host-main.cjs#L758039-L758055) | 4 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:546230-546246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546230-L546246) | 4 | 0 | 0 | 5 | 0 | 1 |

### host:758039

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `candidate.includes`, `new URL`, `normalizeHostname`, `raw.trim`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `7010d9c538992f295dbed9407bcf7e795428f80cf23059c36d540363157f9008`.

### evaluation:546230

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `candidate.includes`, `new URL`, `normalizeHostname`, `raw.trim`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `7a0cb2e1bfafd8b1e22f15258ba613581c767f805a85560ce7ccd5068172facf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
