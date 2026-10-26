# `writeJsonAtomic`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683895-683898](../../../../../../../reference/runtime/host-main.cjs#L683895-L683898) | `FunctionDeclaration` | sim | `path33, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683895-683898](../../../../../../../reference/runtime/host-main.cjs#L683895-L683898) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:683895

Chamadas escritas diretamente neste corpo: `jsonFileContents`, `writeFileAtomic`.

SHA-256 do trecho: `d239307cab3d1cd79375118cb9e73d2497ea7241b0cb4fdebe21c621f45e9a36`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
