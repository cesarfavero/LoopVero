# `matchWebsiteToSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546840-546862](../../../../../../reference/runtime/host-main.cjs#L546840-L546862) | `FunctionDeclaration` | não | `{   website,   target: rawTarget }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546840-546862](../../../../../../reference/runtime/host-main.cjs#L546840-L546862) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:546840

Chamadas escritas diretamente neste corpo: `isSecureCredentialTarget`, `matchTargetRule`, `normalizedHostname2`, `normalizedPort`, `parseHttpUrl`.

SHA-256 do trecho: `bca9ff2413c878fe98e1e8fc124c3582068d4235a1eacb53f32358ecb1b35158`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
