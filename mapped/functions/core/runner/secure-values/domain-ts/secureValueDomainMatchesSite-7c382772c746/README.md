# `secureValueDomainMatchesSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/domain.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758059-758064](../../../../../../../reference/runtime/host-main.cjs#L758059-L758064) | `FunctionDeclaration` | não | `allowedDomain, site` |
| [evaluation:546250-546255](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546250-L546255) | `FunctionDeclaration` | não | `allowedDomain, site` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758059-758064](../../../../../../../reference/runtime/host-main.cjs#L758059-L758064) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:546250-546255](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546250-L546255) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:758059

Chamadas escritas diretamente neste corpo: `parseSecureValueHttpsSite`, `site.hostname.endsWith`.

SHA-256 do trecho: `44d4f213b16d15b83a79fa1b328c796dfcd39e7dd4b0e79ea9da1e60316af497`.

### evaluation:546250

Chamadas escritas diretamente neste corpo: `parseSecureValueHttpsSite`, `site.hostname.endsWith`.

SHA-256 do trecho: `44d4f213b16d15b83a79fa1b328c796dfcd39e7dd4b0e79ea9da1e60316af497`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
