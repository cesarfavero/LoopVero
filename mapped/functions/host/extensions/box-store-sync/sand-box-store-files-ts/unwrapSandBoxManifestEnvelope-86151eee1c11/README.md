# `unwrapSandBoxManifestEnvelope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474661-474671](../../../../../../../reference/runtime/host-main.cjs#L474661-L474671) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474661-474671](../../../../../../../reference/runtime/host-main.cjs#L474661-L474671) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:474661

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `JSON.parse`, `fencedManifestWriterEnvelopeSchema.safeParse`, `new Uint8Array`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `a8d869bed167a2f57de58bb8509773429968eb2e4327c31482bc770008841cca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
