# `matchTargetRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546810-546824](../../../../../../reference/runtime/host-main.cjs#L546810-L546824) | `FunctionDeclaration` | não | `rule, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546810-546824](../../../../../../reference/runtime/host-main.cjs#L546810-L546824) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:546810

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `normalizedHostname2`, `normalizedPort`, `rule.host.toLowerCase`, `rule.registrableDomain.toLowerCase`.

SHA-256 do trecho: `956fda44935e4b5cbcd9fba2e4ecad6b061f10917da5d1dd2235edec53f1aa07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
