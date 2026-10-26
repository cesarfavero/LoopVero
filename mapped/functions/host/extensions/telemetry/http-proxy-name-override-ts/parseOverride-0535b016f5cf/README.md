# `parseOverride`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/http-proxy-name-override.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731735-731749](../../../../../../../reference/runtime/host-main.cjs#L731735-L731749) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731735-731749](../../../../../../../reference/runtime/host-main.cjs#L731735-L731749) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:731735

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `isUnknownRecord2`, `normalizeHttpProxyName`, `parseJsonOrUndefined`.

SHA-256 do trecho: `95c0b9f2fab73f6968ea2fbe0ffa249010505b354e4e0ea992a14622807a532f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
