# `fetchHostBundleDigest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/host-upgrade/host-bundle-source.ts` · [README do módulo](../../../../../../modules/host/extensions/host-upgrade/host-bundle-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681188-681203](../../../../../../../reference/runtime/host-main.cjs#L681188-L681203) | `FunctionDeclaration` | sim | `fetchFn, version4, base` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681188-681203](../../../../../../../reference/runtime/host-main.cjs#L681188-L681203) | 2 | 0 | 2 | 1 | 2 | 0 |

### host:681188

Chamadas escritas diretamente neste corpo: `fetchFn`, `hostBundleDigestUrl`, `new SandHostBundleSourceError`, `parseSandHostBundleDigest`, `resp.text`.

Alvos de lançamento explícito: `SandHostBundleSourceError`.

SHA-256 do trecho: `381c074d3e871ca1665597469903b52e7364511a1927c44e3456feaa9aa1e6f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
