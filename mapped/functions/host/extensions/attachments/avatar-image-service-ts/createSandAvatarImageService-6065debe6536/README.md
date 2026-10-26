# `createSandAvatarImageService`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/avatar-image-service.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/avatar-image-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497856-497867](../../../../../../../reference/runtime/host-main.cjs#L497856-L497867) | `FunctionDeclaration` | não | `environment, auth2, createGenerator = () => createSandImageGenerator(environment, auth2, { aspectRatio: AVATAR_IMAGE_ASPECT_RATIO })` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497856-497867](../../../../../../../reference/runtime/host-main.cjs#L497856-L497867) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497856

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `03d73ae39eff354bc4fc431d87c5a9378d89de2294f2198b63e79edd408ad33e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
